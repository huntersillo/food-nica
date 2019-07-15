const INITIAL_STATE = {
  sections: [
    {
      title: "platillos ",
      imageUrl:
        "https://img-global.cpcdn.com/002_recipes/recipes_6867_v1393346336_receta_foto_00006867/1502x1064cq70/carne-en-vaho-nicaragua-foto-principal.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "refrescos",
      imageUrl:
        "https://i.pinimg.com/originals/6c/b2/dc/6cb2dc374062f8a0a71c9ba8d8c6656e.jpg",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "POSTRES",
      imageUrl:
        "https://jovenesconamericalatina.files.wordpress.com/2012/02/dsc07250.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "ARTE",
      imageUrl:
        "https://i.pinimg.com/originals/9e/94/d4/9e94d4104f39c37491413a8f48f1ca15.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "ROPA TIPICA",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXUk3D099f4_W-zOURXk4f8OxsSPnacSgsTrcJvLvLunRTotH",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
