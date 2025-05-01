if __name__ == "__main__":
    # This script is intended to be run as a standalone program.
    # It will not execute if imported as a module.
    import os
    # delete all files wich start with "__test__" in the current directory and all subdirectories
    for root, dirs, files in os.walk("."):
        for file in files:
            print(f"Checking file: {file}")
            if file.startswith("__Test__"):
                print(f"Deleting file: {os.path.join(root, file)}")
                os.remove(os.path.join(root, file))
    # delete all folders which start with "__test__" in the current directory and all subdirectories and are empty
    for root, dirs, files in os.walk("."):
        for dir in dirs:
            print(f"Checking folder: {dir}")
            # and are empty
            if dir.startswith("__test__") and not os.listdir(os.path.join(root, dir)):
                # check if the folder is empty and not a test folder

                
                print(f"Deleting folder: {os.path.join(root, dir)}")
                os.rmdir(os.path.join(root, dir))