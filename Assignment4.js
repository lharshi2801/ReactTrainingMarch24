
function Assignment4() {

    let  imageArray = ["./Images/Image4.jpg","./Images/Image4.jpg","./Images/Image4.jpg","./Images/Image4.jpg","./Images/Image4.jpg"  ];

   


return (
  <>
    

{
    imageArray.map((image)=>(
        <img  width="100"  src={image} />
    ))
}
    
    
   
   
   
  </>     
);
}

export default Assignment4;