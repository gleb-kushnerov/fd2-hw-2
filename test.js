(function () {
    'use strict';
    let tagField = {
            element: document.createElement('div'),
            getTags: function () {
                return [...this.element.children].filter(element => element.classList.contains('tag'));
            },
            destroy: function () {
                this.element.removeEventListener('keydown', createTag);
                this.element.removeEventListener('click', removeTag);
                this.element.remove();
            }
        },
        tagFieldEl = tagField.element,
        inputEl = document.createElement('input');

    document.body.append(tagFieldEl);
    tagFieldEl.classList.add('tag-field');
    tagFieldEl.append(inputEl);
    tagFieldEl.addEventListener('keydown', createTag);
    tagFieldEl.addEventListener('click', removeTag);

    function createTag(event) {
        if (event.key === 'Enter' || event.key === ',')  {
            if (event.key === ',') {
                event.preventDefault();
            }
            let tagEl = document.createElement('div');
            tagFieldEl.append(tagEl);
            tagEl.classList.add('tag');
            tagEl.textContent = `${inputEl.value}`;
            inputEl.value = ``;
        }
    }

    function removeTag(event) {
        let tag = event.target.closest('.tag');
        if (tag)  {
            tag.remove();
        }
    }

}());