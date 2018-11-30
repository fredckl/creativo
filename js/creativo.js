function ready(cb) {
    document.addEventListener('DOMContentLoaded', cb)
};

ready(function (e) {
    document.addEventListener('keypress', function (eKey) {
        if (eKey.key === "e") {
            document.addEventListener('click', function (eClick) {
                document.querySelectorAll('.event-editable').forEach(element => {
                    eClick.preventDefault();
                    element.setAttribute('contenteditable', true);
                    removeClick(element);
                });
            })
        }
    })

    function removeClick(elm) {
        elm.addEventListener('click', function (e) {
            e.preventDefault();
        })
    }

    document.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.event-editable').forEach(element => {
                element.removeAttribute('contenteditable');
            })
        }
    })
});