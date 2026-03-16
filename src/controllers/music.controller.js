const musicModel=require('../models/music.model');
const jwt=require('jsonwebtoken')
const {uploadFile}=require('../services/storage.services')
const albumModel=require("../models/album.model")

async function createMusic(req,res) {
    const {title}=req.body;
    const file=req.file;
    try{
    const result=await uploadFile(file.buffer.toString('base64'))
    const music=await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id    //from middleware
    })
    res.status(201).json({
        message:"Music created successfully",
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist
        }
    })
}
    catch(err){
        res.status(500).json({
            message:"Upload Failed",
            error:"err.message"
        })
    }
}

async function createAlbum(req,res){
        const {title,musics}=req.body;
        const album=await albumModel.create({
            title,
            artist:req.user.id,
            musics:musics
        })

        res.status(201).json({
            message:"Album created successfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.artist,
                musics:album.musics
            }
        })
}

async function getAllMusics(req,res){
    const musics=await musicModel.find().populate("artist","username email")
    res.status(200).json({
        message:"Music fetched successfully",
        musics
    })
}

async function getAllAlbums(req,res){
    const albums=await albumModel.find().select("title artist").populate("artist","username").populate("musics")
    res.status(200).json({
        message:"Album fetched successfully",
        albums:albums
    })
}

async function getAlbumById(req,res){
    const albumId=req.params.albumId;
    const album=await albumModel.findById(albumId).populate("artist","username").populate("musics")
    return res.status(200).json({
        message:"Album fetched successfully",
        album:album
    })
}
module.exports={createMusic,createAlbum,getAllMusics,getAllAlbums,getAlbumById}