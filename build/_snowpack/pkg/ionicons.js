var CACHED_MAP;var getIconMap=function(){if(typeof window==="undefined"){return new Map}else {if(!CACHED_MAP){var r=window;r.Ionicons=r.Ionicons||{};CACHED_MAP=r.Ionicons.map=r.Ionicons.map||new Map;}return CACHED_MAP}};var addIcons=function(r){var e=getIconMap();Object.keys(r).forEach((function(t){return e.set(t,r[t])}));};

export { addIcons };
