import os
import datetime
from typing import Tuple
from enum import Enum


class MenuOption(Enum):
    ARTICLE = "article"
    TUTORIAL = "tutorial"

    def get_path(self) -> str:
        """Returns the path associated with the MenuOption."""
        return self.value


class Menu:
    def __init__(self, options: Tuple[Tuple[int, MenuOption], ...]) -> None:
        """Initialize a new Menu object with the given options.

        Args:
            options (Tuple[Tuple[int, MenuOption], ...]): A tuple of tuples containing the option index and MenuOption object.
        """
        self.options = options

    def __str__(self) -> str:
        """Return a string representation of the menu options."""
        return "\n".join(self.format_option(option) for option in self.options)

    def display(self) -> None:
        print(self)

    def prompt_selection(self) -> MenuOption:
        """Prompt the user to select a MenuOption and return it.

        Returns:
            The selected MenuOption.
        """
        while True:
            try:
                option_select = int(input(f"Select an option (1-{len(self.options)}): "))
                option = self.options[option_select - 1][1]
                break
            except (ValueError, IndexError):
                print("Invalid option. Please try again.")

        return option

    @staticmethod
    def format_option(option: Tuple[int, MenuOption]) -> str:
        """Return a string representation of a menu option.

        Args:
            option (Tuple[int, MenuOption]): A tuple containing the option index and MenuOption object.

        Returns:
            str: A string representation of the menu option in the format "{index}. Create {option_path_title}".
        """
        index, menu_option = option
        option_path_title = menu_option.get_path().title()
        return f"{index + 1}. Create {option_path_title}"


class FileManager:
    def __init__(self, content_dir: str, banners_dir: str) -> None:
        """Initialize a new FileManager object with the given content and banners directories.

        Args:
            content_dir (str): The directory to store content files.
            banners_dir (str): The directory to store banner images.
        """
        self.content_dir = content_dir
        self.banners_dir = banners_dir

    def create_file(self, filename: str, option: MenuOption) -> None:
        """Create a new file with the given filename and MenuOption.

        Args:
            filename (str): The filename to use.
            option (MenuOption): The MenuOption to use.
        """
        path = f"{self.content_dir}/{option.get_path()}/{filename}.md"
        metadata = self.create_metadata(option)

        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w+") as f:
            f.write(metadata)

    def create_metadata(self, option: MenuOption) -> str:
        """Create metadata for a new file based on the given MenuOption.

        Args:
            option (MenuOption): The MenuOption to use.

        Returns:
            str: The metadata string.
        """
        today = datetime.date.today()
        publication_date = today.strftime("%d %b %Y")

        banner = f"{self.banners_dir}/{option.get_path()}.webp"

        metadata = f"""---
title: 
tags:
  - web
description: 
publicationDate: {publication_date}
banner: "{banner}"
---
"""

        return metadata


def prompt_filename() -> str:
    """Prompt the user to enter a filename and return it.

    Returns:
        str: The entered filename.
    """
    return input("Enter name of the file: ")


if __name__ == "__main__":
    menu = Menu(
        (
            (0, MenuOption.ARTICLE),
            (1, MenuOption.TUTORIAL),
        )
    )
    menu.display()
    option = menu.prompt_selection()
    filename = prompt_filename()
    file_manager = FileManager("content", "banners")
    file_manager.create_file(filename, option)
