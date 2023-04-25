
const cache_estatico = 'staticV1';
const cache_dinamico = 'dinamicV1';
const cache_inmutable = 'inmutableV1';

self.addEventListener('install', e => {

    const cacheInstallEstatico = caches.open(cache_estatico).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/css/style.css',
            '/img/A1.jpg',
            '/img/B1.jpg',
            '/img/L1.jpg',
            '/img/F1.jpg',
            '/img/H1.jpg',
            '/img/Z1.jpg',
            '/img/amyRetro.jpg',
            '/img/AScooby.jpg',
            '/img/BenRetro1.jpg',
            '/img/BScooby.jpg',
            '/img/FryRetro.jpg',
            '/img/FScooby.jpg',
            '/img/hermesRetro.jpg',
            '/img/HScooby.jpg',
            '/img/leelaretro.jpg',
            '/img/LScooby.jpg',
            '/img/logofuturama.png',
            '/img/zoidbergRetro.jpg',
            '/img/ZScooby.jpg',
            '/img/No_Image.jpg',
            '/img/futurama.jpg',
            '/img/pa.jpg',
            'pages/Offline.html',
            '/js/funcion.js',
            '/js/app.js',
            '/Manifest.json'           
        ]);

    })
    
    
      const cacheInstallimutable= caches.open(cache_inmutable).then(cache=>{

       return cache.add('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css')
      })
       e.waitUntil(Promise.all([cacheInstallEstatico,cacheInstallimutable]));
    });
    



 self.addEventListener('fetch', e=>{

    const respuesta = new Promise((resolve, reject)=>{

        let rechazada = false;
        const falloUnaVez = ()=>{
         if(rechazada){ 
            if(/\.(png|jpg)$/i.test(e.request.url)){
                resolve(caches.match('img/No_Image.jpg'));
            }
            else{
                reject('No se encontro respuesta')
            }
        }
        else{
            rechazada = true;

        }

    };
    fetch(e.request).then(res =>{
        res.ok? resolve(res): falloUnaVez();

    }).catch(falloUnaVez);

    caches.match(e.request).then(res=>{
        res? resolve(res):falloUnaVez();

        const respuesta = fetch (e.request).then(res=>{

            console.log('fetch',res);
            caches.open(cache_dinamico).then(cache=>{
            cache.put(e.request, res);

            })
            return res.clone();
        }).catch(err=>{
            if(e.request.headers.get('accept').includes('text/html')){
                return caches.match('pages/Offline.html');
            }
        })

    }).catch(falloUnaVez);
}).catch(err=>{
    if(e.request.headers.get('accept').includes('text/html')){
        return caches.match('pages/Offline.html');
    }
})
e.respondWith(respuesta);
})

