// Async Functions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    for (let i = 0; i < 10; i++) {
        console.log(i);
      }
    // expected output: "resolved"
  }
  
  asyncCall();

  
  