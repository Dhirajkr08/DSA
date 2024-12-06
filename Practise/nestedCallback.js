// don't modify this function
function increment(value, callback) {
    setTimeout(() => {
        const newValue = value + 1;
        callback(newValue);
    }, 800);
  }

// don't modify this function
  function double(value, callback) {
    setTimeout(() => {
        const newValue = value * 2;
        callback(newValue);
    }, 300);
  }

// don't modify this function
  function square(value, callback) {
    setTimeout(() => {
        const newValue = value * value;
        callback(newValue);
    }, 500);
  }

increment(2,function(incrementValue){
    double(incrementValue,function(doubleValue){
        square(doubleValue,function(squareValue){
            console.log(squareValue)
        })
    })
})  
