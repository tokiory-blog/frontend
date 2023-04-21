from typing import Callable, Iterable
from enum import Enum

class MenuOption(Enum):
  ARTICLE = 1
  TUTORIAL = 2

def get_option_path(option: MenuOption) -> MenuOption:
  if option == MenuOption.ARTICLE:
    return "article"
  elif option == MenuOption.TUTORIAL:
    return "tutorial"

# Printing
def prompt_menu() -> MenuOption:
  format_option: Callable[[Iterable[str]], str] = lambda x: f"{x[0] + 1}. Create {get_option_path(x[1])}"
  option_select = "-1"

  while not option_select.isdigit() or int(option_select) <= 0 or int(option_select) > len(MenuOption):
    print(*list(map(format_option, enumerate(MenuOption))), sep='\n')
    option_select = input("Type number: ")

  return MenuOption(int(option_select))

def prompt_filename() -> str:
  return input("Enter name of a file: ")

def create_file(filename: str, option: MenuOption):
  path = f'content/{get_option_path(option)}/{filename}'
  f = open(path, "w")
  f.write("""---
title: 
tags:
  - web
description: 
publicationDate: 
banner: "/banners/.webp"
---
  """)
  f.close()  
    
 
if __name__ == "__main__":
  option = prompt_menu()
  filename = prompt_filename()
  create_file(filename, option)
