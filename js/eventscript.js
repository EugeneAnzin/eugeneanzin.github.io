function customEvent()
{
    let selectItem = document.getElementById('lang_selector1__select','_self');
    if (selectItem.value)
        window.location.href = selectItem.value
}
