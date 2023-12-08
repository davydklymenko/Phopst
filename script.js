'use strict';

const search = document.querySelector('#search');
    const rslt = document.querySelector('#result');
        const statusBlock = document.querySelector('div'); 

        const post = async (url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            })

            return await res.json();
        }

    
        // Search

search.addEventListener('input', () => {    

        fetch('http://localhost/IT%20projects/Phopst/js/current.json', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
              
        }).then((data) => data.json())
          .then((json) => {
            if (search.value === "Hi") {
                rslt.value = json.current.hi;
            } else if (search.value === "Whats up") {
                rslt.value = json.current.whatsup;
            } else if (search.value === "Whats your name") {
                rslt.value = json.current.whatsname;
            } else if (search.value === "minecraft") {
                rslt.value = json.current.minecraft;
            } 
            statusBlock.textContent = 'Loading...';  
          }).then(() => {
            setTimeout(() => {
                statusBlock.remove();
            }, 6000)
          }).catch(() => {
            statusBlock.textContent = 'Oops! Try again';   
          }).finally(() => {
             if (rslt.value) {
                statusBlock.textContent = 'Thanks!';
             }
          })
    });

    // Post Content

        const file = document.querySelector('#photofile');
        const submit = document.querySelector('button');
        const div = document.createElement('img');

       submit.addEventListener('click', photo => {
                const formData = new FormData();

                formData.append(photo, file);

                const objtoJson = JSON.stringify(Object.fromEntries(formData.entries()));
            
            post('http://localhost:3000/requests', objtoJson)
            .then(() => {
                    div.src = file;
                    console.log('File save!');
            })
            .then(() => {
                setTimeout(() => {
                    statusBlock.remove();
                    div.remove();
                }, 15000)
            })
            .catch(() => {
                console.error('File Crash!');
            })
            .finally(() => {
                statusBlock.textContent = 'Photo remove in 15 sec';
            })
        });

        // Total time

        const fps = document.querySelector('#fps');
        const scnds = document.querySelector('#sec');
        const sum = document.querySelector('.sum');
        const b = document.querySelector('#btn');

        btn.addEventListener('click', function() {

            fetch('http://localhost/IT%20projects/Phopst/js/post.php', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json' 
            }      
        }).then(data => data.text())
        .then(() => {
              if (sum.value = fps.value * scnds.value) {
                 sum.innerHTML = (sum.value / 60).toFixed(1);
              }
            }).catch(() => {
                console.error('404 Not Found');
            })
        });

        // Languages

        const ua = document.querySelector('.ua'),
              en = document.querySelector('.en'),
              de = document.querySelector('.de'),
              whapper = document.querySelector('.whapper')

              function changeToUA() {
                ua.addEventListener('click', () => {
                    whapper.innerHTML = `
                    <img src="img/phopt.svg" alt="Logo | Phopst" method="post">
                    <input placeholder="Пошук..." id="search" name="text" type="text">
                    <input id="result" name="text" type="text">
                    <div></div><hr>
            
                    <h4 for="text">Постити</h4>
                        <input id="search" name="file" type="file">
                            <button>Надіслати</button><hr>
            
                            <h3 for="text">Через скільки часу ваша анімація буде готова?</h3>
                        <input placeholder="фпс" name="number" type="number" id="fps">
                        <input placeholder="Секунди" name="number" type="number" id="sec">
                        <div class="sum"></div>
                        <button style="background-color: black; color: white;" 
                        id="btn">Загальний час(хв)</button> 
                    `;
                });
              }

              function changeToEN() {
                en.addEventListener('click', () => {
                    whapper.innerHTML = `
                    <img src="img/phopt.svg" alt="Logo | Phopst" method="post">
                    <input placeholder="Search..." id="search" name="text" type="text">
                    <input id="result" name="text" type="text">
                    <div></div><hr>
            
                    <h4 for="text">Post</h4>
                        <input id="search" name="file" type="file">
                            <button>Submit</button><hr>
            
                            <h3 for="text">How much your animation will be ready?</h3>
                        <input placeholder="FPS" name="number" type="number" id="fps">
                        <input placeholder="Seconds" name="number" type="number" id="sec">
                        <div class="sum"></div>
                        <button style="background-color: black; color: white;" 
                        id="btn">Total time(min)</button> 
                    `;
                });
              }

              function changeToDE() {
                de.addEventListener('click', () => {
                    whapper.innerHTML = `
                    <img src="img/phopt.svg" alt="Logo | Phopst" method="post">
                    <input placeholder="Suche..." id="search" name="text" type="text">
                    <input id="result" name="text" type="text">
                    <div></div><hr>
            
                    <h4 for="text">Post</h4>
                        <input id="search" name="file" type="file">
                            <button>Senden</button><hr>
            
                            <h3 for="text">Wie lange wird Ihre Animation fertig sein?</h3>
                        <input placeholder="fps" name="number" type="number" id="fps">
                        <input placeholder="Sekunden" name="number" type="number" id="sec">
                        <div class="sum"></div>
                        <button style="background-color: black; color: white;" 
                        id="btn">Gesamte Zeit (min)</button> 
                    `;
                });
              }
              
              changeToUA();
              changeToEN();
              changeToDE();
