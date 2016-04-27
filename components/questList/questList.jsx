import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import QuestListItemComponent from "./questListItemComponent.jsx";

var getAll = function (callback) {
    fetch('/quests', {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(function (response) {
        return response.json();
    }).then(function (text) {
        callback(text);
    }).catch(err => {
        callback(err);
    });
};

export default class QuestList extends React.Component {

    constructor(params) {
        super(params);
        this.state = {
            quests: []
        };
    }

    componentDidMount() {
        getAll(data => {
            this.setState({quests: data});
        });
    }

    render() {

        var questNodes = this.state.quests.map((quest) =>
            <QuestListItemComponent key={quest._id}
                                    id={quest._id}
                                    quest={quest}
                                    link={quest.photo[0].link}/>
        );

        return (
            <ul className='quest-list'>
                {questNodes}
            </ul>
        );
    }
}

ReactDOM.render(
    <QuestList />,
    document.getElementById('list')
);