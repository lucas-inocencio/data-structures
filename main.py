if __name__ == "__main__":
    import os

    def create_file(folder_name):
        """
        Creates a JavaScript file and associated test folder structure based on the given folder name.
        """
        print(f"Checking folder: {folder_name}")
        # Check if the folder is empty and not a test folder
        if os.path.isdir(folder_name) and not os.listdir(folder_name) and not folder_name.endswith("__test__"):
            # Convert folder name to PascalCase
            pascal_case_name = folder_name.replace("\\", "/").split("/")[-1].replace("-", " ").title().replace(" ", "")
            print(f"Processing folder: {folder_name}")
            print(f"Pascal case name: {pascal_case_name}")
            
            js_file_path = os.path.join(folder_name, f"{pascal_case_name}.js")
            print(f"JavaScript file path: {js_file_path} javascript file size: {os.path.getsize(js_file_path) if os.path.exists(js_file_path) else 'N/A'}")
            if not os.path.exists(js_file_path) or os.path.getsize(js_file_path) <= 14:
                with open(js_file_path, "w") as f:
                    f.write(f"""class {pascal_case_name} 
                            {{ constructor() {{
                                // Constructor logic here
                            }} }}
                            
                            module.exports = {{ {pascal_case_name} }};""")
                os.makedirs(os.path.join(folder_name, "__test__"), exist_ok=True)
                with open(os.path.join(folder_name, "__test__", f"{pascal_case_name}.test.js"), "w") as f:
                    f.write(f"""
const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { {pascal_case_name} } = require("../${pascal_case_name}.js");
describe("{pascal_case_name}", () => {{
    let {pascal_case_name.lower()} 
    
    beforeEach(()) => {{
        {pascal_case_name.lower()} = new {pascal_case_name}();
    }};
}};""")
        else:
            for child in os.listdir(folder_name):
                child_path = os.path.join(folder_name, child)
                if os.path.isdir(child_path):
                    create_file(child_path)

    create_file("src")
