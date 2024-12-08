
import "./index.css";


   

function Ingridients(){
    return(
    <div className="better-ingredients">
      <div className="ingredients-grid">
        <div className="ingredients-header">
          <h3 className="section-title">Ingredients</h3>
          <h2 className="section-subtitle">Better Ingredients</h2>
          <p className="section-description">
            Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
          </p>
         </div> 

        <div className="ingredient-card">
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">Vitamin C</h4>
                <p className="ingredient-description">Vitamin C as ascorbic acid</p>
              </div>
              <button className="see-more">See More</button>
            </div>
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">Vitamin B3</h4>
                <p className="ingredient-description">Niacin for healthy gut and skin</p>
              </div>
              <button className="see-more">See More</button>
            </div>
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">Magnesium</h4>
                <p className="ingredient-description">Boost energy and support muscle function</p>
              </div>
              <button className="see-more">See More</button>
            </div>
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">Hyaluronic Acid</h4>
                <p className="ingredient-description">For smooth, supple and soft skin!</p>
              </div>
              <button className="see-more">See More</button>
            </div>
            <div className="ingredient-overlay">
              <div>
                <h4 className="ingredient-title">Lactobacillus</h4>
                <p className="ingredient-description">Invigorate your gut microbiome</p>
              </div>
              <button className="see-more">See More</button>
            </div>
        </div>

      </div>
        
      
    </div>
    )
}
export default Ingridients