var React = require('react');
var ReactDOM = require('react-dom');

var QuestListItemComponent = require('./questListItemComponent.jsx');

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

var QuestList = React.createClass({

    getInitialState: function () {
        return {
            quests: []
        };
    },
    
    componentDidMount: function () {
         getAll(function (data) {
            this.setState({quests: data});
        }.bind(this));
    },

    render: function () {

        var questNodes = this.state.quests.map(function (quest) {
            return (
                <QuestListItemComponent
                    key={quest._id}
                    id={quest._id}
                    quest={quest}
                    link={quest.photo[0].link}
                />
            );
        }, this);

        return (
            <ul className='quest-list'>
                {questNodes}
            </ul>
        );
    }
});

ReactDOM.render(
    <QuestList />,
    document.getElementById('list')
);