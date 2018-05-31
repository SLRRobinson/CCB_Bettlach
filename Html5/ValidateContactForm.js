function ValidateContactForm()
{
    var name = document.ContactForm.Name;
    var email = document.ContactForm.Email;
    var phone = document.ContactForm.Telephone;
    var nocall = document.ContactForm.DoNotCall;
    var what = document.ContactForm.Subject;
    var comment = document.ContactForm.Comment;

    if (name.value == "")
    {
        window.alert("Name eingeben bitte.");
        name.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("e-mail eingeben.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Gültige e-mail eingeben.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Gültige e-mail eingeben.");
        email.focus();
        return false;
    }

    if ((nocall.checked == false) && (phone.value == ""))
    {
        window.alert("Gültige telephone number eingeben.");
        phone.focus();
        return false;
    }

    if (what.selectedIndex < 1)
    {
        alert("Wie könnnen wir helfen?");
        what.focus();
        return false;
    }

    if (comment.value == "")
    {
        window.alert("beschreibung.");
        comment.focus();
        return false;
    }
    return true;
}

function EnableDisable(chkbx)
{
    if(chkbx.checked == true)
    {
        document.ContactForm.Telephone.disabled = true;
    }
    else
    {
        document.ContactForm.Telephone.disabled = false;
    }
}