if __name__ == "__main__":
    # create a new file with the name of the folder and a folder in the same directory with the __test__ with a file 
    # with the same name as the folder
    import os

    # for each folder name if the folder doesnt have children create a file with the name of the folder and a folder in the same directory with the __test__ with a file
    # with the same name as the folder
    def create_file(folder_name):
        """
        Creates a JavaScript file and associated test folder structure based on the given folder name.

        This function performs the following tasks:
        1. Checks if the given folder is empty.
        2. Converts the folder name from kebab-case to PascalCase.
        3. Creates a JavaScript file with the PascalCase name if it does not already exist.
        4. Writes a basic class definition into the JavaScript file.
        5. Creates a `__test__` subfolder within the folder.
        6. Creates a test file inside the `__test__` folder with a basic test structure.

        If the folder is not empty, the function recursively processes its child folders.

        Args:
            folder_name (str): The path to the folder to process.

        Raises:
            OSError: If there are issues with file or folder creation.
        """
        # check if the folder has children
        if os.path.isdir(folder_name) and not os.listdir(folder_name):
            # kebab-case to PascalCase only the last part of the folder name
            # split the folder name by / and take the last part
            # replace - with space and title case the string and remove spaces
            pascal_case_name = folder_name.split("/")[-1].replace("-", " ").title().replace(" ", "")
            # create a file with the PascalCase name if the file doesn't exist
            if not os.path.exists(f"{pascal_case_name}.js"):
                # create a file with the PascalCase name
                # check if the file already exists
                if os.path.exists(f"{pascal_case_name}.js"):
                    print(f"File {pascal_case_name}.js already exists")
                else:
                    print(f"Creating file {pascal_case_name}.js")
                    with open(f"{pascal_case_name}.js", "w") as f:
                        f.write(f"""
                        class {pascal_case_name} {{
                            constructor() {{
                            }}
                        }}
                        """)
                    # create a folder in the same directory with the __test__ with a file with the same name as the folder
                    os.makedirs(os.path.join(folder_name, "__test__"), exist_ok=True)
                    with open(os.path.join(folder_name, "__test__", f"{pascal_case_name}.test.js"), "w") as f:
                        f.write(f"""const {{ expect, describe, it }} = require("jest");
                            const {{ {pascal_case_name} }} = require("../{pascal_case_name}");
                            module.exports = { {pascal_case_name} };""")
        else:
            for child in os.listdir(folder_name):
                child_path = os.path.join(folder_name, child)
                if os.path.isdir(child_path):
                    create_file(child_path)
    
    create_file("src")