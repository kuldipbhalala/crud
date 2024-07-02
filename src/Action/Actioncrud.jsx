export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item
  });


  export const DeleteITEM = (index) => ({
    type: "Delete_ITEM",
    payload: index
  });


  export const EditITEM = (id, value) => ({
    type: "EDIT_ITEM",
    payload: { id, value }
  });


 
