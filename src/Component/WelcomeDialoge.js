import FancyBorder from "./FancyBorder";

function WelcomeDialoge() {
    return (
      <FancyBorder
        left = {      
            <h1 className="Dialog-title">
                Welcome
            </h1>
        }
        right = {
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        }   
      >
          <h1>Jai MAta Di</h1>
      </FancyBorder>
    );
  }

export default WelcomeDialoge;