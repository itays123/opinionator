from typing import NewType
from enum import Enum

UserId = NewType('UserId', int)
UserRoleType = Enum('RoleType', ['Admin', 'User'])

class User():
    openid = 0

    def __init__(self, userName: str, name: str, encryptedPassword:str ,role: UserRoleType):
        self.userId = User.openid
        User.openid+=1
        self._userName = userName
        self._name = name
        self._encryptedPassword = encryptedPassword
        self._role = role
        
    
    @property
    def userName(self):
        return self._userName
    
    @userName.setter
    def userName(self, userName):
        self._userName = userName
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, name):
        self._name = name

    @property
    def encryptedPassword(self):
        return self._encryptedPassword
    
    @encryptedPassword.setter
    def encryptedPassword(self, encryptedPassword):
        self._encryptedPassword = encryptedPassword

    @property
    def role(self):
        return self._role
    
    @role.setter
    def role(self, role):
        self._role = role

    
    def to_json(self): 
        return {
        'userId': self.userId,
        'userName': self._UserName,
        'name': self._name,
        'encryptedPassword': self._encryptedPassword,
        'role': self._role,
    }