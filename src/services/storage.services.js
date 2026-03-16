const {ImageKit}=require("@imagekit/nodejs")

const ImageKitClient=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KET,
})

async function uploadFile(file){
    const result=await ImageKitClient.files.upload({
        file,
        fileName:"music_"+Date.now(),
        folder:"SPOTIFY_PROJECT/music"
    })
    return result;
}
module.exports={uploadFile}