let state = {
    DialogsPage: {
        message: [
            {id:1, type:'in', messageText:'Привет, Саша!'},
            {id:2, type:'out', messageText:'Привет!!!'}
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Boris'},
            {id: 3, name: 'Vasiliy'},
            {id: 4, name: 'Natulek'},
            {id: 5, name: 'Mama'}
        ]
    },

    ProfilePage: {
        posts: [
            {id:1, post: 'Hello, how are you???', likesCount: 15},
            {id:1, post: 'My name is Alex', likesCount: 26},
            {id:1, post: 'It is my first message', likesCount: 114}
    ],
},

    MyFriends: {
        friends: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Boris'},
            {id: 3, name: 'Vasiliy'},
            {id: 4, name: 'Natulek'},
            {id: 5, name: 'Mama'},
            {id: 6, name: 'Temka'}   
        ]
    }


}

export default state;