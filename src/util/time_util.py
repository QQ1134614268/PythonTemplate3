from datetime import datetime

from conf.config import DEFAULT_TIME_STR


# 字符串转时间
def get_datetime_by_str(time_str, fmt=DEFAULT_TIME_STR):
    return datetime.strptime(time_str, fmt)


# 时间转字符串
def get_str_by_datetime(fmt=DEFAULT_TIME_STR):
    return datetime.now().strftime(fmt)


def get_now_str(fmt=DEFAULT_TIME_STR):
    return datetime.now().strftime(fmt)


def get_now():
    return datetime.now()
