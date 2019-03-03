import React, { PureComponent } from 'react';

class CurriculumSections extends PureComponent {



  render() {
    return (
      <div>
      <div className="wrapper">


        <div className="half">

          <div className="tab">
            <input id="tab-one" type="checkbox" name="tabs"/>
            <label htmlFor="tab-one" className="curriculum-label">Module 1: Gain an in-depth knowledge of Ruby & SQL </label>
            <hr className="curriculum-hr"/>
            <div className="tab-content">
            <div className="row">
              <div className="column-left curriculum-text">
                <h4 className="curriculum-h4">Description:</h4>
                <p></p>

              </div>
                <div className="column-right curriculum-text">

                <h4 className="curriculum-h4">What You Will Learn:</h4>
                <p>
                lsdjflsjfljslfjsljflsjfljsldfjlsdjflsjfljsdlfjsjfljsldfjlsdjfsdffasfsfsfsafsfsfsfsfsfsafss
                asldfjlasdjflsjdflsjdfljsldjfsajdflsjdlfjsldfjsjdf
                ajsdlfjlasjflsjfljslfjlsjlf</p>

                </div>
            </div>
            </div>
          </div>

          <div className="tab">
            <input id="tab-two" type="checkbox" name="tabs"/>
            <label htmlFor="tab-two" className="curriculum-label">Label Two</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>

          <div className="tab">
            <input id="tab-three" type="checkbox" name="tabs"/>
            <label htmlFor="tab-three" className="curriculum-label">Label Three</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>


          <div className="tab">
            <input id="tab-four" type="checkbox" name="tabs"/>
            <label htmlFor="tab-four" className="curriculum-label">Label Four</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>


          <div className="tab">
            <input id="tab-five" type="checkbox" name="tabs"/>
            <label htmlFor="tab-five" className="curriculum-label">Label Five</label>
              <hr className="curriculum-hr"/>
            <div className="tab-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>


        </div>
      </div>
      </div>

    );
  }

}

export default CurriculumSections;
