scale$; // 1, 1.1, 1.2
pageId$
selection$



const selectionForCore$ = merge(selection$, pageId$, scale$).pipe(map(([selection, pageId, scale]) => {pageId, selection, scale }));



const Const = ({zoom}) => {
  <div onMouseDown=setSelection()></div>
}


