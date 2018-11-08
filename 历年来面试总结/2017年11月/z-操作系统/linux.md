Linux中常用到的命令

　　显示文件目录命令ls        如ls

　　改变当前目录命令cd        如cd /home

　　建立子目录mkdir           如mkdir xiong

　　删除子目录命令rmdir       如rmdir /mnt/cdrom

　　删除文件命令rm            如rm /ucdos.bat

　　文件复制命令cp            如cp /ucdos /fox

　　获取帮助信息命令man      如man ls

　　显示文件的内容less        如less mwm.lx

　　重定向与管道type          如type readme>>direct，将文件readme的内容追加到文direct中

10、Linux文件属性有哪些？（共十位）

　　-rw-r--r--那个是权限符号，总共是- --- --- ---这几个位。

　　第一个短横处是文件类型识别符：-表示普通文件；c表示字符设备（character）；b表示块设备（block）；d表示目录（directory）；l表示链接文件（link）；后面第一个三个连续的短横是用户权限位（User），第二个三个连续短横是组权限位（Group），第三个三个连续短横是其他权限位（Other）。每个权限位有三个权限，r（读权限），w（写权限），x（执行权限）。如果每个权限位都有权限存在，那么满权限的情况就是：-rwxrwxrwx；权限为空的情况就是- --- --- ---。

　　权限的设定可以用chmod命令，其格式位：chmod ugoa+/-/=rwx filename/directory。例如：

　　一个文件aaa具有完全空的权限- --- --- ---。

　　chmod u+rw aaa（给用户权限位设置读写权限，其权限表示为：- rw- --- ---）

　　chmod g+r aaa（给组设置权限为可读，其权限表示为：- --- r-- ---）

　　chmod ugo+rw aaa（给用户，组，其它用户或组设置权限为读写，权限表示为：- rw- rw- rw-）

　　如果aaa具有满权限- rwx rwx rwx。

　　chmod u-x aaa（去掉用户可执行权限，权限表示为：- rw- rwx rwx）

　　如果要给aaa赋予制定权限- rwx r-x r-x，命令为：

　　chmod u=rwx，Go=rx aaa