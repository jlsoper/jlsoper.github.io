
function whichRepo()
{
  if (document.form01.rbutton1.value == "Github")
    openGithub();
  else
    opengitLab();

}

function openGithub()
{
  var str1 = "https://github.com/";

  var str2 = document.form01.user.value;

  var str3 = document.form01.repo.value;

  var str4 = document.form01.website1.value;

  var str5 = document.form01.rbutton2.value;

  var str6 = document.form01.website2.value;

  if ((str2 + str3 + str4 + str6).length != 0)
    window.open(str1 + str2 + "/" + str3 + "/compare/" + str4 + str5 + str6, "_blank");
}

function opengitLab()
{
  var str1 = "https://gitlab.com/";

  var str2 = document.form01.user.value;

  var str3 = document.form01.repo.value;

  var str4 = document.form01.website1.value;

  var str5 = document.form01.rbutton2.value;

  var str6 = document.form01.website2.value;

  if ((str2 + str3 + str4 + str6).length != 0)
    window.open(str1 + str2 + "/" + str3 + "-/compare/" + str4 + str5 + str6, "_blank");
}
