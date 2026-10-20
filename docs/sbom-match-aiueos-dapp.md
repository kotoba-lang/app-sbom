# app-sbom（vuln match）— itonami（dapp）上の分散型設計

状態: 第 1 スライス実装（2026-10-20）。正本はこの文書。
追跡: Linear JUN-128（親 JUN-116）。app-sbom の第 2 スライス（第 1 は SLA）。

## このスライス: vuln match admission 判定コア

| 層 | 実体 | 状態 |
|---|---|---|
| 判定コア guest | `aiueos/sbom_match.cljk` — match-admission（必須欠落 = missingRequiredFields 拒否 / componentId が registry 外 = vulnMatchNotFound / purl 直指定は通す）/ dedup-take（(cveId × purl) は冪等 = alreadyExists）/ confidence-ok（0..1000）/ cvss-ok（0..10000） | **実装済み・実測** |
| 記述子 | `aiueos/sbom-match.edn` | **実装済み** |
| parity | `kotoba/test/sbom/match_parity_test.cljk` — 正本 `vulnRegistry.ts` の規則一致検査（エラー名・別名正規化・冪等・permille フィールド） | **実装済み・実測** |

実測: `amu test aiueos/sbom_match.cljk` → **18/18**（jvm-kir / js / wasm）。
parity → 8 assertions / 0 failures。

## 正本の正確な規則（guest はこれに追従）

- **入力の別名正規化**: `cveId ?? cvId` / `componentPurl ?? componentId`。
  componentId が与えられていて registry に無ければ拒否、purl 直指定は通る。
- **(cveId × purl) の rkey は冪等** —— 既存があれば alreadyExists を返す
  （新規作成しない。dedup の一形）。
- 照合の強さは **matchConfidencePermille（0..1000）**、CVSS は
  **cvssPermille（0..10000、10.0 = 10000）**。SLA 判定（第 1 スライス）の
  cvss-x10（10 倍）とは単位が違う —— 正本のフィールド単位に追従。

## 未実装境界

- purl のバージョン範囲照合そのもの（CVE の affected range x component
  version）は matcher 側（run-vuln-match の実体）にあり未判定 —— 次スライス
  候補。blast radius（推移的依存の集計）も同様。
- TS は `.js` 拡張子 import のため node 直接実行不可 → parity はソース一致
  検査（実行 parity は正本の vitest が担う）。
- mon（DNA）化、aiueos session 載せ（fleet 共通）。
