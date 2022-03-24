# -*- coding:utf-8 -*-
"""
@Time: 2021/8/24
@Description:
"""
import os
from conf.sw_config import SHENWAN_URL


cmd = "sqlacodegen mysql://root:123456@127.0.0.1:3306/test?charset=utf8mb4 > old_models.py"
# cmd = "sqlacodegen mysql+pymysql://root:123456@127.0.0.1:3306/test?charset=utf8mb4 > models.py"

# cmd = "sqlacodegen mysql://root:6HOoIAqc22uw7gc2@119.3.178.32:31862/pledge_risk_01?charset=utf8mb4 > risk_models.py"

# cmd = "sqlacodegen oracle+cx_oracle://system:oracle@127.0.0.1:15210/?service_name=helowin > old_models.py"
# cx_Oracle.init_oracle_client(lib_dir=r"D:\dev\instantclient_21_3")

cmd = f"sqlacodegen {SHENWAN_URL} > old_models.py"

os.system(cmd)
