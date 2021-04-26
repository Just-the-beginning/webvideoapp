turnConfig = {
    iceServers: [{
        urls: [ "stun:bn-turn1.xirsys.com" ]
     }, {
        username: "f4WJBJ1l9FnD1ASJOvQA7qPkjzIzIBxmK8qlHwDAQsPbQgvNqBoKFwDe-chspr2VAAAAAGCGo8BzdGFja3Nu",
        credential: "754a55fc-a682-11eb-a76e-0242ac140004",
        urls: [
            "turn:bn-turn1.xirsys.com:80?transport=udp",
            "turn:bn-turn1.xirsys.com:3478?transport=udp",
            "turn:bn-turn1.xirsys.com:80?transport=tcp",
            "turn:bn-turn1.xirsys.com:3478?transport=tcp",
            "turns:bn-turn1.xirsys.com:443?transport=tcp",
            "turns:bn-turn1.xirsys.com:5349?transport=tcp"
        ]
     }]
}