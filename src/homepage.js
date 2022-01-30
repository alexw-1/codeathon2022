import img1 from "./pic1.jpg";
import img2 from "./pic2.jpg";
import "./homepage.css"
// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
export default function Home(){
    return (
        <div>
            {/* <img className="mySlides" src="img_mountains.jpg" alt='carosuel img'></img>
            <img className="mySlides" src="img_forest.jpg" alt='carosuel img'></img> */}
            <p> Dōbutsu is a nonprofit technology company, which uses machine learning to find and identify endangered animals and to educate society about them. Our goal is to conserve biodiversity and preserve the ecosystem services associated with it.</p>
            <img className="mySlides" src={img2} alt='carosuel img'></img>
            <p>Biodiversity benefits mankind. There are many economic benefits to this. It can provide food, fuel, fiber, and shelter. It can also provide air and water purification. Another benefit would be waste decomposition and climate stabilization through a reduction in droughts, floods and other weather events. Biodiversity can also provide the pollination of plants. It can also be used as a way to control pests and diseases that are harming human agriculture, helping to increase profit margins for humankind. This would also increase the yield of crops as well. This can help mankind to feed its growing population. Biodiversity can also help to maintain genetic diversity for crop varieties and livestock. Biodiversity can also provide cultural and aesthetic benefits. We also learn a lot from animals, such as possible compounds that cure diseases.</p>
            <img className="mySlides" src={img1} alt='carosuel img'></img>
            <p>There is a great value to a species having genetic diversity. Genetic Diversity can provide us with drugs and medicine. Almost half of today's medicines are from chemical compounds in wild plants. If we have more plants, this would allow us to have more medicines, which in turn can help save more lives. Some plants include pineapple, autumn crocus, pacific yew, velvet bean and common foxglove. Genetic Diversity would also allow us to bioprospect the searching of new organisms that might provide new foods, medicine, or other products. However, some animals may go extinct before these necessary and vital substances are discovered. That’s why we have to protect endangered species and this project is helping to take a step in the next direction. </p>
        </div>
    );
}