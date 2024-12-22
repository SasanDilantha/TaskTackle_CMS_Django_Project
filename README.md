#### Task list for this CRM project
>- [X] create vertual enviroment for install django and other dependancies. run this for create env
```python -m venv <env_name>``` and you used windos terminal may be you want to run ```Set-ExecutionPolicy RemoteSigned -Scope CurrentUser``` this command. after that activate env. after that install django using ```pip install django```. then run ```django-admin startproject <project_name>```. after move the project folder.
>- [X] base pages/ template
>>- [X] create app for pages. run ```python manage.py startapp core```. after that add ```core``` in <poject_folder_name>/settins.py under  INSTALLED_APP [].
>>- [X] create base template. create template folder inside ```core``` folder.
>>- [X] create front page 
>>- [X] create acout page
>- [X] authentication
>>- [X] create  database model for userprofile
>>- [X] make it possible to sign up
>>- [X] make it possible to login
>>- [X] make it possible to logout
>- [X] simple dashboad
>- [] create new leads
>- [] convert leads to clients
>- [] change and delete clients
>- [] implement solution for teams
>- [] impliment a pyment solution / monthly recurring payments
>- [] Deploy