var controller = (() => {
    let counter = 0;

    const data = [
        {id: 0, image:'dee.jpg'},
        {id: 1, image:'pexel.jpeg'},
        {id: 2, image:'bb.jpg'},
        {id: 3, image:'fall.jpg'}
    ];

    const changeImage = (e) => {

      if (e.target.id =='next'){
        if (counter >= "4"){
          counter = 0;
          displayImage(counter);
        } if (counter <= '3') {
          displayImage(counter);
          counter += 1;
        }
      }

      if (e.target.id =='back'){

          if (counter == 0) {
            counter = data.length - 1;
            displayImage(counter);
          }
          counter -=1;
          displayImage(counter);
      }
    };

    const displayImage = (index) => {
        document.getElementById("image").src = data[index].image;
    };

    const eventHandler = () => {
      document.getElementById("back").addEventListener("click", changeImage);
      document.getElementById("next").addEventListener("click", changeImage);
    };

    return {
        init: () => {
          console.log("App Started");
          eventHandler();
        }
    }
})();

controller.init()
