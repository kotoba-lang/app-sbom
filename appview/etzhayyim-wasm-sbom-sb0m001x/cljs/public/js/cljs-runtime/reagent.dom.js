goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22189 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22190 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22190);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__22191 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22192 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22192);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22191);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22189);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22194 = arguments.length;
switch (G__22194) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22195 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22195,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22195,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22198_22231 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22199_22232 = null;
var count__22200_22233 = (0);
var i__22201_22234 = (0);
while(true){
if((i__22201_22234 < count__22200_22233)){
var vec__22208_22239 = chunk__22199_22232.cljs$core$IIndexed$_nth$arity$2(null, i__22201_22234);
var container_22240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22239,(0),null);
var comp_22241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22208_22239,(1),null);
reagent.dom.re_render_component(comp_22241,container_22240);


var G__22242 = seq__22198_22231;
var G__22243 = chunk__22199_22232;
var G__22244 = count__22200_22233;
var G__22245 = (i__22201_22234 + (1));
seq__22198_22231 = G__22242;
chunk__22199_22232 = G__22243;
count__22200_22233 = G__22244;
i__22201_22234 = G__22245;
continue;
} else {
var temp__5823__auto___22246 = cljs.core.seq(seq__22198_22231);
if(temp__5823__auto___22246){
var seq__22198_22247__$1 = temp__5823__auto___22246;
if(cljs.core.chunked_seq_QMARK_(seq__22198_22247__$1)){
var c__5525__auto___22248 = cljs.core.chunk_first(seq__22198_22247__$1);
var G__22249 = cljs.core.chunk_rest(seq__22198_22247__$1);
var G__22250 = c__5525__auto___22248;
var G__22251 = cljs.core.count(c__5525__auto___22248);
var G__22252 = (0);
seq__22198_22231 = G__22249;
chunk__22199_22232 = G__22250;
count__22200_22233 = G__22251;
i__22201_22234 = G__22252;
continue;
} else {
var vec__22212_22253 = cljs.core.first(seq__22198_22247__$1);
var container_22254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22212_22253,(0),null);
var comp_22255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22212_22253,(1),null);
reagent.dom.re_render_component(comp_22255,container_22254);


var G__22257 = cljs.core.next(seq__22198_22247__$1);
var G__22258 = null;
var G__22259 = (0);
var G__22260 = (0);
seq__22198_22231 = G__22257;
chunk__22199_22232 = G__22258;
count__22200_22233 = G__22259;
i__22201_22234 = G__22260;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
