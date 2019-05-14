const opinion = false,
      changeOpinion = new Promise(
     (resolve, reject)=> {
        if (opinion) {
            const react = 'давайте лучше пройдем две лекции React\'a вместо одной';
            resolve(react);
        } else {
            const angul = new Error('надо затронуть и React и Angular, что бы иметь понимание и там и там');
            reject(angul);
        }
    }
),
      askPavel = ()=> {
    changeOpinion
        .then(response=> {console.log(response)})
        .catch(error=> {console.log(error.message)});
};
askPavel();
/*промис - это такой, своего рода if  который умеет ждать*/

