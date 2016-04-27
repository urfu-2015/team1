import React from 'react';

export default class QuestListItemComponent extends React.Component {

    render() {
        return (
            <li className="quest-list__item" id={this.props.id}>
                <strong className="quest-list__field-name">Название:</strong>
                {this.props.quest.name}
                <strong className="quest-list__field-name">Фото:</strong>
                <img className="quest-list__image" src={this.props.link}/>
                <strong className="quest-list__field-name">Автор:</strong>
                {this.props.quest.author.username}
                <strong className="quest-list__field-name">Описание:</strong>
                {this.props.quest.description}
            </li>
        );
    }
}