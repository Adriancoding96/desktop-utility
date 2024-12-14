use std::process::Command;


#[tauri::command]
fn launch_firefox() -> Result<(), String> {
    let command = if cfg!(target_os = "windows") {
        "firefox.exe"
    } else if cfg!(target_os = "macos") {
        "/Applications/Firefox.app/Contents/MacOS/firefox"
    } else {
        "firefox"
    };

    let args = vec!["https://www.mozilla.org"];

    tauri::async_runtime::spawn(async move {
        let result = Command::new(command)
            .args(&args)
            .spawn();

        match result {
            Ok(_) => {
                println!("Firefox launched successfully");
            }
            Err(e) => {
                eprintln!("Failed to launch Firefox: {}", e);
            }
        }
    });
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![launch_firefox])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
