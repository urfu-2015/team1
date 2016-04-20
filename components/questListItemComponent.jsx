import React from 'react';

export default class QuestListItemComponent extends React.Component {

    render() {
        return (
            <li id={this.props.id}>
                <div> 
                    <strong>Название: </strong>
                    {this.props.quest.name}
                </div>
                <div>
                    <strong>Фото: </strong>
                    <img src={this.props.link} />
                </div>
                <div>
                    <strong>Автор: </strong>
                    {this.props.quest.author.username}
                </div>
                <div>
                    <strong>Описание: </strong>
                    {this.props.quest.description}
                </div>
            </li>
        );
    }
}