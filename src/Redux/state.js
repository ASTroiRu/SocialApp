let store = {
    _state: {
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
    },
    getState() {
        return (this._state);
    },
    _callSubscriber() {
        console.log('rerendered');
    },
    addPost() {
        let newPost = {
            id: 4,
            post: this._state.ProfilePage.newPostText,
            likesCount: 0
        };
        this._state.ProfilePage.posts.push(newPost);
        this._state.ProfilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.ProfilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    }
}
export default store;