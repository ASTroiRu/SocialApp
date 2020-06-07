let rerenderTree = () => {
    console.log('rerendered');
}

let state = {
    DialogsPage: {
        message: [
            { id: 1, type: 'in', messageText: 'Привет, Саша!' },
            { id: 2, type: 'out', messageText: 'Привет!!!' }
        ],
        dialogs: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Boris' },
            { id: 3, name: 'Vasiliy' },
            { id: 4, name: 'Natulek' },
            { id: 5, name: 'Mama' }
        ]
    },

    ProfilePage: {
        posts: [
            { id: 1, post: 'Hello, how are you???', likesCount: 15 },
            { id: 1, post: 'My name is Alex', likesCount: 26 },
            { id: 1, post: 'It is my first message', likesCount: 114 }
        ],
        newPostText: ''
    },

    MyFriends: {
        friends: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Boris' },
            { id: 3, name: 'Vasiliy' },
            { id: 4, name: 'Natulek' },
            { id: 5, name: 'Mama' },
            { id: 6, name: 'Temka' }
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id: 4,
        post: state.ProfilePage.newPostText,
        likesCount: 0
    };
    state.ProfilePage.posts.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderTree(state);
    
};
export const updateNewPostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    
    rerenderTree(state);
};

export const subscribe = (observer) => {
    rerenderTree = observer;
}



export default state;