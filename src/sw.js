self.addEventListener('install',evt => {
    console.log('install evt', evt);
})

self.addEventListener('activate',evt => {
    console.log('activate evt', evt);
})