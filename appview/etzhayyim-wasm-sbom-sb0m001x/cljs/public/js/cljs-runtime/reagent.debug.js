goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21644__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21645__i = 0, G__21645__a = new Array(arguments.length -  0);
while (G__21645__i < G__21645__a.length) {G__21645__a[G__21645__i] = arguments[G__21645__i + 0]; ++G__21645__i;}
  args = new cljs.core.IndexedSeq(G__21645__a,0,null);
} 
return G__21644__delegate.call(this,args);};
G__21644.cljs$lang$maxFixedArity = 0;
G__21644.cljs$lang$applyTo = (function (arglist__21646){
var args = cljs.core.seq(arglist__21646);
return G__21644__delegate(args);
});
G__21644.cljs$core$IFn$_invoke$arity$variadic = G__21644__delegate;
return G__21644;
})()
);

(o.error = (function() { 
var G__21647__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21648__i = 0, G__21648__a = new Array(arguments.length -  0);
while (G__21648__i < G__21648__a.length) {G__21648__a[G__21648__i] = arguments[G__21648__i + 0]; ++G__21648__i;}
  args = new cljs.core.IndexedSeq(G__21648__a,0,null);
} 
return G__21647__delegate.call(this,args);};
G__21647.cljs$lang$maxFixedArity = 0;
G__21647.cljs$lang$applyTo = (function (arglist__21649){
var args = cljs.core.seq(arglist__21649);
return G__21647__delegate(args);
});
G__21647.cljs$core$IFn$_invoke$arity$variadic = G__21647__delegate;
return G__21647;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
