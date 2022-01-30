import './Blog.css';
import esa from './Screen_Shot_2020-09-13_at_1.14.49_PM_big.png';
import Detroit from './detriot sprawl.jpg';
import extinct from './dinosaur-extinction-theories-top-ten-large.jpg';
import six from './graph.png';
export default function Blog() {
    return (
        <div id="blogPage">
            <div className="card">
                <h1>What is the Endangered Species Act? (11/17/21)</h1>
                <div className="fakeimg"><img src={esa} alt="" /></div>
                <div className="para">
                    <p>The Endangered Species Act of 1973 was passed under the administration of president Richard Nixon. This offered protection to species that fall within two categories. The first one is endangered species, or species in danger of becoming extinct in the future. There are also threatened species, or species likely to become endangered. The ESA forbids the government from taking action to destroy individuals within identified species. One of the current controversies surrounding the law would be that it imperils the livelihoods of some. If a logger is working in an area where an endangered species is spotted, they must stop work in that area, making him lose profits. There are some other success stories, such as a voluntary campaign to lessen the impacts on the greater sage grouse. The ESA may also promote cooperation with landowners via Habitat conservation plans and safe harbor agreement. Some may also promote captive breeding.</p>
                </div>
            </div>
            <div className="card">
                <h1>Is extinction natural? How has the extinction rate changed over time? Why are extinction rates today different from rates in the past? (11/18/21)</h1>
                <div className="fakeimg"><img src={extinct} alt="" /></div>
                <div className="para">
                    <p>Extinction is natural and it is something that has occured since the start of our planet 14.6 billion years ago. It makes sense because as animals need to adapt to change those that don't die. This is natural selection. Extinction rates have drastically increased since the industrial revolution. The background extinction rate, or the pace for independent extinction is 1 out of every 10 million mammal and marine animals going extinct each year. The current extinction rate is 100 to 1000 times greater than the background rate. According to the International Union for Conservation of Nature (IUCN) Red List's reported that these animals were threatened with extinction 25% of mammals, 14% of bird Species, 40% of gymnosperm plants species, and 40% of amphibian species. This is because of Habitat Loss, Invasive Species, Pollution, Climate Change, and Overpopulating. Habitat Fragmentation can also lead to this as well. These are some of the multiple factors that would lead to the decline of a species.</p>
                </div>
            </div>
            <div className="card">
                <h1>What are the major causes of the sixth mass extinction event, and why is it of particular concern? (11/19/21)</h1>
                <div className="fakeimg"><img src={six} alt="" /></div>
                <div className="para">
                    <p>The major causes of the sixth mass extinction event would be human impacts. Extinction occurs when the last member of a species dies and the entire species ceases to exist; It is irreversible. Extirpation is the loss of a species from one area but not the entire world, one example of this would be the Black Rhino. Human impact is responsible for most extirpation and extinction occurring currently. The background extinction rate is the pace for independent extinction. It is 1 out of every 1-10 million mammal and marine animals going extinct each year. There are 5 Mass Extinction Events and the earth is 4.6 billion years old. Life started from single cell organisms, but the current Extinction rate is 100-1000 times greater than the background rate. Some extinct species would include the Carolina Parakeet, Whooping Crane, Ivory Billed Woodpecker, and Kirtland's Warbler. There is also the International Union for Conservation of Nature's (IUCN) Red List , an international list of all species facing high risks of extinction. Red List has the Extinction risk for 25% animals, 14% bird Species, 40% of gymnosperm plants species; and 40% of amphibian species. The reasons are Habitat Loss, Invasive Species, Pollution, Climate Change, Overpopulating, overhunting and overfishing as a result of humans.</p>
                </div>
            </div>
            <div className="card">
                <h2>Syed’s reaction to Professor Mark Swilling’s article about Urban Sprawl (12/13/21)</h2>
                <div className="fakeimg"><img src={Detroit} alt="" /></div>
                <div className="para">
                    <p>It has been 136 years since the creation of the first skyscraper and nowadays, they are everywhere within our cities. However, with the creation of cities come unintended consequences, urban sprawl. This effect is harming our farmland and sustainability. Mark Swilling, professor of sustainable development, argues to put this concept to an end via the high-density neighborhood approach to urban development.</p>
                    <p>
                        Swilling first introduces us to the city of Barcelona, to show how a city can be planned properly, compared to the sprawl many cities are plagued with. A majority of humans live in cities and it can be beneficial for the environment in some cases. If we can pack into a smaller space, that would save lands for agriculture, wilderness, biodiversity, and a host of other valuable reasons. However, our population is expected to reach 9.9 billion humans according to the United Nations. Society as a whole is operating as if there are infinite amounts of resources in this world for us to use, but that is not true. Cities are also resource sinkholes, therefore the current ways cities are being built are not sustainable. The modern city has become similar to that of an octopus, sprawling and devouring what exists in its path (The path can be considered valuable land). Urbanization will lead to more and more land being dedicated to cities, this will impede food production which can mean that food production would not keep up with population growth. </p>
                    <p>
                        Oil can be seen as the driving factor behind sprawl. American cities were created to be centered around the car. The biggest example of this would be the American Interstate system - what was it developed for and who uses it the most? The answer, my friend, the car. Therefore, people can buy cheap land on the outskirts of town and use the car to commute to work every day. This was possible when oil was cheap, however, when the price of oil increased, this effect decreased and so did the sprawl. Professor Swilling saw that almost 70,000 of Detroit's 300,000 buildings were empty. Detroit's sprawl also came from the upper class’ desire for the city and suburbs. Once Motor City fell, however, people left and the city could not maintain this kind of growth (This is also the reason for the one dollar Detroit homes). Americans love their oil and they have also started wars for it, but it has had some harmful effects.
                    </p>
                </div>
            </div>
        </div>
    );
}