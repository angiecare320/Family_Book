var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Tayo Dad.png", "Tope Mum.png" , "Myra.png", "Angie.png"];
var names = ["Family Book","Tayo Olusanya", "Tope Olusanya", "Myra Olusanya", "Angie Olusanya"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    console.log(updatedImage)
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
    console.log(updatedName)
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
