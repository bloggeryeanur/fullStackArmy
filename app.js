// const aPromise = control => { 
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if(control) {
//              resolve();
//           } else {
//              reject();
//           }
//        }, 3000)
//     })
//  }

//  aPromise(false).then(()=>{
//      console.log('Promise Successfull')
//  }).catch(()=>{
//      console.log('Failure Me')
//  })

// const aPromiseWithData = control =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(control){
//                 resolve('Simple Success Data')
//             }else{
//                 reject('Simple Error Data')
//             }
//         },3000)
//     })
// }

// // aPromiseWithData(false).then((data)=>{
// //     console.log(data)
// // })

// aPromiseWithData(true).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(true) {
//           resolve('Promise 2 Resolved');
//        } else {
//           reject('Promise 2 Error');
//        }
//     }, 5000)
//  })

//  const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(true) {
//           resolve('Promise 2 Resolved');
//        } else {
//           reject('Promise 2 Error');
//        }
//     }, 5000)
//  })

//  Promise.all([promise1, promise2])

//  Promise.all([promise1,promise2]).then((dataArr)=>{
//      console.log(dataArr)
//  })



/////Itarator and generator////////////

// const hello = 'Yeanur'
// const helloIterator = hello[Symbol.iterator]()

// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())
// console.log(helloIterator.next())

// for(let v of helloIterator){
//     console.log(v)
// }

// const range = {
//     start : 1,
//     stop : 100,
//     stop : 5
// }

// range[Symbol.iterator] = function(){
//     return{
//         next(){
//             return{
//                 value: 1,
//                 done: false
//             }
//         },
//     }
// }

// for(let v of range){
//     console.log(v)
// }


// const range = {
//     start : 0,
//     sotp : 33,
//     step : 1,
// };

// range[Symbol.iterator]=function(){
//     let current = this.start;
//     const stop  = this.stop;
//     const step = this.step;

//     return{
//         next(){
//             const 0 = {
//                 value : current,
//                 done : current > stop,
//             }
//             current += step;
//             return 0;
//         },
//     };
// };

// for(let v of range){
//     console.log(v)
// }



// const range = {
//     	start: 0,
//     	stop: 100,
//     	step: 5,
//     };
//     range[Symbol.iterator] = function () {
//     	let current = this.start;
//     	const stop = this.stop;
//     	const step = this.step;
//     	return {
//     		next() {
//     			const o = {
//     				value: current,
//     				done: current > stop,
//     			};
//     			current += step;
//     			return o;
//     		},
//     	};
//     };
    
//     for (let v of range) {
//     	console.log(v);
//     }

  
