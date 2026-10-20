# app-sbom（パッチ SLA）— itonami（dapp）上の分散型設計

状態: 第 1 スライス実装（2026-10-20）。正本はこの文書。
追跡: Linear JUN-128（親 JUN-116）。

## 位置づけ

app-sbom は **SBOM + パッチ管理**（build 時 SBOM 生成 → yabai CVE マッチ →
blast radius → completer 連携）。本スライスは **パッチ SLA の判定**
（tier → 時間 → overdue）を判定コア化。

## このスライス: SLA 判定コア

| 層 | 実体 | 状態 |
|---|---|---|
| 判定コア guest | `aiueos/sbom_sla.cljk` — severity-tier（CVSS ≥9.0→24h / ≥7.0→72h / ≥4.0→168h / <4.0→720h の境界判定、none は Low 扱い）/ sla-hours（policy の個別 SLA 上書き、未知 tier は -1）/ sla-ok（残り時間負 = overdue） | **実装済み・実測** |
| 記述子 | `aiueos/sbom-sla.edn` | **実装済み** |
| parity | `kotoba/test/sbom/sla_parity_test.cljk` — 正本ピン値（`patchRegistry.ts` の SLA 表 / `DEFAULT_SLA_HOURS` / `slaHours*`、AGENTS.md の CVSS 境界）と一致 | **実装済み・実測** |

実測: `amu test aiueos/sbom_sla.cljk` → **18/18**（jvm-kir / js / wasm）。
parity → 10 assertions / 0 failures。

## 正本の正確な規則（guest はこれに追従）

- **SLA 表（AGENTS.md の明文）**: Critical (CVSS ≥9.0) → 24h / High (≥7.0) →
  72h / Medium (≥4.0) → 168h / Low (<4.0) → 720h。
- `severityToHours` は policy の `slaHoursCritical/High/Medium/Low` で
  **上書き**、無ければ `DEFAULT_SLA_HOURS`。severity が none/未定義は Low 扱い
  （guest では tier 3 = low / 未知 tier は -1 で既定を作らない）。
- 期限 = discoveredAt + hours。**残り時間は負になりうる = overdue**
  （getSlaTimer / listOverdueVulnMatches の判定根拠）。

## 実測メモ

- guest の docstring 内の `"none"`（引用符）が ns docstring を閉じてしまい
  export 節が壊れた —— 引用符無し表記に修正（docstring はシングルクォート
  表記のみ可 = guest 規約の再確認）。
- CVSS は浮動小数を避け 10 倍整数（90 = 9.0）で受け取る（guest 規約）。

## 未実装境界

- CVE マッチング（purl のバージョン範囲照合）と blast radius（推移的依存）の
  判定 —— 次スライス候補。recall（リコール判断）も同様。
- patchPolicy の auto-decide 規則（severity ごとの自動適用）の判定。
- mon（DNA）化、aiueos session 載せ（fleet 共通）。
