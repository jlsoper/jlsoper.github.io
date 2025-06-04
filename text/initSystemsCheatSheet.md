# Manage services in systemD, openRC and runit


## systemD


* list all services: `systemctl list-unit-files`
* list running services status: `systemctl list-units`
* list failed services: `systemctl --failed`
* list available services: `systemctl --all`
* start a service: `systemctl start [SERVICE_NAME]`
* stop a service: `systemctl stop [SERVICE_NAME]`
* restart a service: `systemctl restart [SERVICE_NAME]`
* get the status of a service: `systemctl status [SERVICE_NAME]`
* enable a service: `systemctl enable [SERVICE_NAME]`
* disable a service: `systemctl disable [SERVICE_NAME]`


## openRC


* list services: `rc-status`
* list failed services: `rc-status --crashed`
* list available services: `rc-update -v show` or `ls /etc/init.d/`
* start a service: `rc-service [SERVICE_NAME] start` or `service [SERVICE_NAME] start` or `/etc/init.d/[SERVICE_NAME] start`
* stop a service: `rc-service [SERVICE_NAME] stop` or `service [SERVICE_NAME] stop` or `/etc/init.d/[SERVICE_NAME] stop`
* restart a service: `rc-service [SERVICE_NAME] restart` or `service [SERVICE_NAME] restart` or `/etc/init.d/[SERVICE_NAME] restart`
* get the status of a service: `rc-service [SERVICE_NAME] status` or `service [SERVICE_NAME] status` or `/etc/init.d/[SERVICE_NAME] status`
* enable a service: `rc-update add [SERVICE_NAME]`
* disable a service: `rc-update del [SERVICE_NAME]`


## runit


> note, if you're an Artix user, available services are in `/etc/runit/sv` directory
>       and the enabled services are in `/run/runit/service` directory


* list all available services: `ls /etc/sv`
* list all enabled services: `ls /var/service/`
* start a service: `sv up [SERVICE_NAME]` or `sv u [SERVICE_NAME]`
* stop a service: `sv down [SERVICE_NAME]` or `sv d [SERVICE_NAME]`
* restart a service: `sv restart [SERVICE_NAME]` or `sv t [SERVICE_NAME]`
* get the status of a service: `sv status [SERVICE_NAME]` or `sv s [SERVICE_NAME]`
* get the current status of all enabled services: `sv status /var/service/*`
* enable a service: `ln -s /etc/sv/[SERVICE_NAME] /var/service`
* disable a service: `rm /var/service/[SERVICE_NAME]`

