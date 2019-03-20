(function () {
    'use strict';

    function createTagsField() {
        let tagField = {
                element: document.createElement('div'),
                getTags: function () {
                    return [...this.element.children].filter(element => element.classList.contains('tag')).map(div => div.textContent);
                },
                destroy: function () {
                    this.element.removeEventListener('keydown', createTag);
                    this.element.removeEventListener('click', removeTag);
                    this.element.remove();
                }
            },
            tagFieldEl = tagField.element,
            inputEl = document.createElement('input');

        tagFieldEl.classList.add('tag-field');
        tagFieldEl.append(inputEl);
        tagFieldEl.addEventListener('keydown', createTag);
        tagFieldEl.addEventListener('click', removeTag);

        function createTag(event) {
            if (event.key === 'Enter' || event.key === ',')  {
                event.preventDefault();
                if (uniqueCheck(inputEl.value)) {
                    let tagEl = document.createElement('div');
                    tagFieldEl.append(tagEl);
                    tagEl.classList.add('tag');
                    tagEl.textContent = `${inputEl.value}`;
                    inputEl.value = ``;
                } else {
                    inputEl.value = ``;
                }
            }
        }

        function removeTag(event) {
            let tag = event.target.closest('.tag');
            if (tag)  {
                tag.remove();
            }
        }
        
        function uniqueCheck(inputValue) {
            return !tagField.getTags().includes(inputValue);
        }

        return tagField;
    }

    let tagField = createTagsField();
    document.body.append(tagField.element);
}());
