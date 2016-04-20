import React from 'react';
import ReactDOM from 'react-dom';
import QuestListItemComponent from "./questListItemComponent.jsx";

var getAll = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/quests');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status !== 200) {
            callback({
                status: xhr.status,
                content: xhr.statusText
            });
        } else {
            callback(JSON.parse(xhr.responseText));
        }
    };

    xhr.send({});
};

export default class QuestList extends React.Component {

    constructor(params) {
        super(params);
        this.state = {
            quests: []
        };
    }
    
    componentDidMount() {
         getAll(function (data) {
            this.setState({quests: data});
        }.bind(this));
    }

    render() {

        var questNodes = this.state.quests.map(
            (quest) => <QuestListItemComponent key={quest._id}
                                               id={quest._id}
                                               quest={quest}
                                               link={quest.photo[0].link} />
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