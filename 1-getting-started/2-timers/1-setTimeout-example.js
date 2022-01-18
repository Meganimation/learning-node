

function setMultiTimeout(callback, ...args) {
  setTimeout(
    () => {
      console.log('hi after 4 seconds, btw im the setMultiTimeout function')
    },
    4 * 1000,
  );

  setTimeout(
    () => {
      console.log('hi after 8, btw im the setMultiTimeout functio')
    },
    8 * 1000,
  );

}

const theOneFunc=(delay, name='default')=>{
  console.log(`Hi to ${name} after ${delay} seconds`);
}

setTimeout(theOneFunc, 4*1000 ,4, 'megan')
setTimeout(theOneFunc, 8*1000, 8)


// setMultiTimeout()

