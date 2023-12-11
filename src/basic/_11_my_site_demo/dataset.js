const dataset = {
    introduce: {
        hello: {
            msg1: "안녕하세요. OOO입니다.",
            msg2: "This is my website"
        },
        aboutme: {
            title: "ABOUT ME",
            subtitle: "I love photography",
            content: 'We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        photobox: {
            myname: "Frontend Student",
            img: "/img/avatar_hat.jpg",
            msg: "Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        skill: {
            title: "I'm really good at:",
            section: [{
                icon: "fa-camera",
                name: "Photography",
                state: 90
            }, {
                icon: "fa-laptop",
                name: "Web Design",
                state: 85
            }, {
                icon: "fa-image",
                name: "Photoshop",
                state: 75
            }]
        },
        point: [{
            value: "14+",
            text: "Partners"
        }, {
            value: "55+",
            text: "Projects Done"
        }, {
            value: "89+",
            text: "Happy Clients"
        }, {
            value: "150+",
            text: "Meetings"
        }]
    },
    portfolio: {
        hello: {
            msg1: "portfolio",
            msg2: "This is my work"
        },
        work: {
            title: "MY WORK",
            msg1: "Here are some of my latest lorem work ipsum tipsum.",
            msg2: "Click on the images to make them bigger",
            gallery: [
                {img: "/img/p1.jpg"},
                {img: "/img/p2.jpg"},
                {img: "/img/p3.jpg"},
                {img: "/img/p4.jpg"},
                {img: "/img/p5.jpg"},
                {img: "/img/p6.jpg"},
                {img: "/img/p7.jpg"},
                {img: "/img/p8.jpg"}
            ]
        }
    },
    contact: {
        hello: {
            msg1: "contact",
            msg2: "Address, Email, Phone"
        },
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.3298152142662!2d127.03093062331529!3d37.50038759454418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1652c6e31a7%3A0x7fe683e301da6726!2z66mU6rCA7Iqk7YSw65SUSVTslYTsubTrjbDrr7g!5e0!3m2!1sko!2skr!4v1700133598643!5m2!1sko!2skr",
        address: "서울특별시 강남구 강남대로94길 삼경빌딩",
        phone: "02-588-9991",
        email: "mail@mail.com"
    }
}

export default dataset;